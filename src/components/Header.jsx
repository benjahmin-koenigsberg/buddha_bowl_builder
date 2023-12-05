
function Header({progress}) {

  return (
    <header className="mb-4">
      <h1 className="display-5">Buddah Bowl Builder</h1>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress}%` }}
          >
          </div>
      </div>
    </header>
  );
}
export default Header
