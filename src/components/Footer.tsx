function Footer() {
  const source = "https://publicapis.dev/";
  const github = "https://github.com/trinhbond/random-jokes";

  return (
    <div className="footer">
      <p className="source">
        Courtesy of{" "}
        <a
          href={source}
          title={source}
          target="_blank"
          rel="noopener noreferrer"
        >
          publicapis.dev
        </a>{" "}
        |{" "}
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
