
function Header({progress}) {

  return (
    <header className="mb-4">
      <h1 className="display-6 text-light">Buddah Bowl Builder</h1>
      <div className="progress">
        <div
          className="progress-bar bg-success"
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
