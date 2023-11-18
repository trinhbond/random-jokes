function Footer() {
  const SOURCE = "https://github.com/trinhbond/random-jokes";

  return (
    <div className="footer">
      <div className="source">
        Check out the{" "}
        <a
          href={SOURCE}
          title={SOURCE}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub code
        </a>
      </div>
    </div>
  );
}

export default Footer;
