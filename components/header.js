function Header() {
  return (
    <div>
      <h3 id="title" className="element-animated fade-in long mt-5">
        Pandemi Takip
      </h3>
      <div
        id="kart"
        className="element-animated fade-in long card mb-3 mt-3 w-50 mw-25 mx-auto"
      >
        <div className="card-body">
          <p className="card-text">
            Pandemi ile ilgili global istatistiklere güncel olarak
            erişebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
