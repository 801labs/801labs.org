import type { Config, TemplateFunction, TemplateMap, TemplateOutput } from '../shared.ts';
import basic from './basic.ts';

const about: TemplateFunction = (config: Config, templateMap: TemplateMap) => {
  return basic({
    ...config,
    content: /* html */`
<div class="window content">
  <h1>About 801 Labs</h1>
  <h2>Mission<span class="cursor-highlight">&nbsp;</span></h2>
  <p>Our mission is to provide a space and a community for peer learning through workshops, presentations, and regular social activities focused around information technology, electronics, and Information security. 801 Labs is intended to be a shared community resource, and therefore most of our events are free and open to the public.</p>
  <h2>Organization</h2>
  <p>801 labs is a non-profit organization run by its volunteers and overseen by a board of directors. Our bylaws and meeting minutes are available on our GitHub page.</p>
  <p>While the board has the authority to make decisions for the organization, our volunteers run the day-to-day activities through committees. A list of committees along with their descriptions can be found on the getting involved page.</p>
  <p>801 Labs is funded entirely by donations, which help us to pay for our rent and keep the space open and available to the community. Much of our equipment is donated by members of the community and other companies. These donations are essential for our continued existence, and any donations are welcome. Please visit our <a class="donate-button" href="/donate/">donation</a> page to learn more.</p>
  <h2>F.A.Q.</h2>
  <h3>Hacking is a broad topic, are there specific interests of 801labs?</h3>
  <p>The list keeps growing but to date people have shared the following at 801labs:</p>
  <ul>
    <li>Information Security (InfoSec): Routers, Switches, Firewalls, Servers, Password Cracking</li>
    <li>Physical Security: Lock picking</li>
    <li>Software: Metasploit, Wireshark, Nessus, NMap, Netcat</li>
    <li>Languages: Ruby, Javascript, C++, PHP, Python, Go</li>
    <li>OS: Linux, BSD, Unix, Windows</li>
    <li>Embedded: Arduino, ESP, Arm, Propeller, Automotive</li>
  </ul>
  <h3>What is the difference between 801 Labs and DC801?</h3>
  <p>While both are integral parts of the Utah hacker community, 801 Labs and DC801 are separate entities. 801 Labs is the non-profit physical place while DC801 is the people. Neither have formal membership. Will I see those people IRL at the place? Yes, the 801 Labs hackerspace is a public 501(c)(3) that is open to the public, we welcome everyone.</p>
  <p>DC801 is the local DEFCON user group. Presentations from DC801 focus on information and general security. For more information on DC801 visit www.dc801.org</p>
  <h3>What is the history of 801 Labs?</h3>
  <ul>
    <li>2012: DC801 worked with the Utah County hackerspace, The Transistor, to create a sub-branch called TransistorSLC.</li>
    <li>2014: The Transistor closed.</li>
    <li>2014: TransistorSLC rebranded as 801 Labs.</li>
    <li>2014: 801 Labs moved to 353 East 200 South in Salt Lake City, where they have been hacking ever since.</li>
    <li>2019: 801 labs applied for 501(c)(3) to meet the growing demands of the hacker community.</li>
  </ul>
  <h3>Is hacking illegal?</h3>
  <p>Ok, this is click bait because everyone defines hacking differently. Bluntly put, 801 labs does not condone illegal activities. Leave your black hat at home. There are too many things that need legal hacking, help us with those instead.</p>
  <h2>Resources</h2>
  <h3>To be clear, 801 Labs is a Hackerspace, <strong>NOT</strong> a Maker-space.</h3>
  <p>We have tools for people learning to hack things. Some of those tools are for fabrication and prototyping, however this is NOT our primary focus. If fabrication, prototyping, and/or production is your primary motivation, you should also check out Make SLC.</p>
  <h2>Equipment & Tools</h2>
  <div class="equipment-tool-list-container">
    <div>
      <h4>Equipment</h4>
      <ul class="tool-list">
        <li>Laser cutter</li>
        <li>Resin 3D printer</li>
        <li>Filament 3D printers</li>
        <li>CNC Mill</li>
        <li>Obscenely large vinyl cutter</li>
      </ul>
    </div>
    <div>
      <h4>Tools</h4>
      <ul class="tool-list">
        <li>Power tools: Drill</li>
        <li>Logic analyzer</li>
        <li>Soldering irons</li>
        <li>Power Suppy Tester</li>
        <li>Network Cable Tester</li>
        <li>Multimeters</li>
      </ul>
    </div>
    <div>
      <h4>More</h4>
      <ul class="tool-list">
        <li>Stereo microscope</li>
        <li>TV's & projectors</li>
        <li>Touch screens</li>
        <li>Teaching Laptops (12)</li>
        <li>Practice Server Cluster (5 NUC's and growing)</li>
      </ul>
    </div>
  </div>
</div>
`,
  }, templateMap);
};

export default about;
