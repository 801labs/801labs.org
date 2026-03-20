import basic from './basic.js';

export default function (config) {
  const { basePath } = config;
  return basic({
    ...config,
    content: /* html */`
<div class="window">
  ${config.content}
</div>
<div class="window contact-grid">
  <div class="contact-section">
    <h2>Join us on Discord</h2>
    <p>Discord is where our community hangs out, shares projects, and coordinates events. Jump in and say hello!</p>
    <iframe
      src="https://discord.com/widget?id=178925846289211393&theme=dark"
      width="100%"
      height="400"
      allowtransparency="true"
      frameborder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      style="border: 2px solid var(--grey-utility);"
    ></iframe>
  </div>
  <div class="contact-section">
    <h2>Visit the Hackerspace</h2>
    <p>We're located at 353 East 200 South Suite #201, Salt Lake City, UT 84111. Come check out the space!</p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-111.8862!3d40.7645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f510e3a0a955%3A0x938e7c98e0fb2b47!2s353%20E%20200%20S%20%23201%2C%20Salt%20Lake%20City%2C%20UT%2084111!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
      width="100%"
      height="400"
      style="border: 2px solid var(--grey-utility);"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
<div class="window">
  <h2>Other ways to reach us</h2>
  <ul>
    <li>Email the Board: <a href="mailto:board@801labs.org">board@801labs.org</a></li>
    <li>Follow us on <a href="https://twitter.com/801labs">Twitter</a></li>
    <li>Find us on <a href="https://www.meetup.com/801labs/">Meetup</a> for upcoming events</li>
    <li>Check out our <a href="https://github.com/801labs/">GitHub</a></li>
  </ul>
</div>
`
  });
};
