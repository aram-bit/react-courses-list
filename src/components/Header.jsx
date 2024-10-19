const courseStatus = ["All", "Active", "Completed", "Upcoming"];
function Header() {
  return (
    <div className="header">
      <h2>My Courses(3)</h2>
      <ul className="category">
        {courseStatus.map((s) => (
          <li className="category_item" key={s}>
            <a href="">{s}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Header;
