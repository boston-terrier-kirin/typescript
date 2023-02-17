interface Course {
  id: string;
  url: string;
  description: string;
  longDescription: string;
  seqNo: number;
  iconUrl: string;
  price: number;
  uploadedImageUrl: string;
  courseListIcon: string;
  category: string;
  lessonsCount: number;
}

// 一部だけupdateする場合に、Partialを使う。
const reactCourseToUpdate: Partial<Course> = {
  id: '1',
  price: 2300,
};

updateCourse(reactCourseToUpdate);

function updateCourse(course: Partial<Course>) {
  console.log(course);
}
