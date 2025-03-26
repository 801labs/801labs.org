import icalButWebpackBreaksTheImport from 'ical/ical.js'
const ICAL = Object.assign({}, icalButWebpackBreaksTheImport);

const calendarUrl = 'https://corsproxy.io/?url=https://calendar.google.com/calendar/ical/c_tkd568kpfmfdnus9frvsv5ffs0%40group.calendar.google.com/public/basic.ics'

async function fetchCalendar(url) {
    const response = await fetch(url, {
        mode: "cors",
    });
    if (!response.ok) {
        throw new Error(`naurrrr :( failed to fetch calendar: ${response.status} ${response.statusText}`);
    }
    const icsData = await response.text();
    const jcalData = ICAL.parseICS(icsData);
    const now = Date.now() - (1000 * 60 * 60 * 5);
    const filtered = Object.values(jcalData).filter(item => (item.type === 'VEVENT' && item.start.getTime() > now));
    filtered.sort((a, b) => a.start.getTime() - b.start.getTime());
    return filtered;
}

export async function getEvents(limit = 4) {
    // adapt the data so it matches the shape the MeetupEvent component is expecting
    return (await fetchCalendar(calendarUrl)).slice(0, limit).map(e => ({
        time: e.start.getTime(),
        utc_offset: e.start.getTimezoneOffset(),
        name: e.summary,
        group: {name: '801Labs'},
        venue: e.location ? {name: e.location} : null,
        is_online_event: false,
        yes_rsvp_count: null,
        description: e.description,
        link: 'https://calendar.google.com/calendar/embed?src=c_tkd568kpfmfdnus9frvsv5ffs0%40group.calendar.google.com&ctz=America%2FDenver',
    }));
}