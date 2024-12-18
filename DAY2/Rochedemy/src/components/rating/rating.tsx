export function Rating(props: any) {
  var ratings = [];

  for (let index = 0; index < props.noofstars; index++) {
    ratings.push(
      <i
        className="fa-solid fa-star"
        key={index}
        style={{ color: "orange" }}
      ></i>,
    );
  }

  return <>{ratings}</>;
}
