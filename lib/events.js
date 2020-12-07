import fetchJsonp from 'fetch-jsonp'

export async function getEvents(limit = 4) {
    return fetchJsonp(`https://api.meetup.com/801labs/events?page=${limit}`).then(res => res.json());
}