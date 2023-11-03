function Footer() {
  const source = "https://publicapis.dev/";

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
          {source}
        </a>
      </p>
    </div>
  );
}

export default Footer;
