function Footer() {
  const source = "https://github.com/trinhbond/random-jokes";

  return (
    <div className="footer">
      <div className="source">
        {"Check out the "}
        <a
          href={source}
          title={source}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub code
        </a>
        {"!"}
      </div>
        <a
          href={github}
          title={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Code
        </a>
      </p>
    </div>
  );
}

export default Footer;
