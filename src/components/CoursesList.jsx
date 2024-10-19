/* eslint-disable react/prop-types */

import courses from "/my-projects/REact/courses/src/Data/data";
function CoursesList() {
  return (
    <div className="courses_list">
      {courses.map((item) => {
        return <CourseItem key={item.id} item={item} />;
      })}
    </div>
  );
}
export default CoursesList;
function CourseItem({ item }) {
  return (
    <>
      <div className="course_item">
        <CourseItemImage img={item.imageUrl} />
        <CourseItemContent
          title={item.title}
          description={item.description}
          tags={item.tags}
          date={item.start}
        />
        <CourseItemDetail rate={item.rate} status={item.status} />
      </div>
    </>
  );
}
function CourseItemImage({ img }) {
  return (
    <span className="course_item-img">
      <img src={img} alt="" />
    </span>
  );
}
function CourseItemContent({ title, description, tags, date }) {
  return (
    <div className="course_item-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="course_item-badge">
        {tags.map((tag) => {
          return (
            <span className="badge" key={tag}>
              {tag}
            </span>
          );
        })}
      </div>
      <div className="course_item-date">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </div>
    </div>
  );
}
function CourseItemDetail({ rate, status }) {
  return (
    <div className="course_item-detail">
      <span>⭐{rate}</span>
      <span
        className={`badge ${
          status === "Active"
            ? "badge_secondary"
            : status === "Upcoming"
            ? "badge_danger"
            : "badge_primary"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
