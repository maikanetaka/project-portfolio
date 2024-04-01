import { Profile } from "../Image/Image";
import { IconMappings } from "../IconMappings";

export const Contact = () => {
  const GmailIcon = IconMappings.Gmail;
  const LinkedinIcon = IconMappings.Linkedin;
  const GitHubIcon = IconMappings.GitHub;
  const InstagramIcon = IconMappings.Instagram;
  return (
    <section>
      <div>
        <h2>Contact</h2>
        <p>For more details, contact me!</p>
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <h3>Mai Kanetaka</h3>
        <div>
          <a
            href="mailto:maikanetaka@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/maikanetaka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/maikanetaka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.instagram.com/kirbygram_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </section>
  );
};