export const Subject = ({ sub }) => {
  console.log(sub[0].subJectTitle);
  return (
    <div>
      <h3>수업과목 : {sub[0].subJectTitle} </h3>
      <h3>수업과목 : {sub[1].subJectTitle} </h3>
      <h3>수업과목 : {sub[2].subJectTitle} </h3>
      <h3>수업과목 : {sub[3].subJectTitle} </h3>
      <h3>수업과목 : {sub[4].subJectTitle} </h3>
    </div>
  );
};
