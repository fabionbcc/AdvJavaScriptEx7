import { client } from "./db.js";
import {
  getStudents,
  getStudent,
  insertStudent,
  insertStudents,
} from "./students.js";

const printStudents = (students) => {
  for (const student of students) {
    console.log(
      `${student._id} | ${student.firstName} ${student.lastName} | Year: ${student.year ?? "N/A"}`,
    );
  }
};

const main = async () => {
  try {
    await client.connect();

    console.log("Connected to MongoDB");

    console.log("\n************ ALL STUDENTS ************");
    const allStudents = await getStudents();
    printStudents(allStudents);

    console.log("\n************ SECOND-YEAR STUDENTS ************");
    const secondYearStudents = await getStudents({ year: 2 });
    printStudents(secondYearStudents);

    console.log("\n************ ONE STUDENT ************");
    const fistId = allStudents[0]._id.toString();
    console.log(await getStudent(fistId));

    console.log("\n************ INSERT STUDENT ************");
    const newId = await insertStudent({
      firstName: "Jack",
      lastName: "Flack",
      middleInitial: "E",
      year: 1,
    });

    console.log(`Student created with id ${newId}`);
    console.log(await getStudent(newId));

    // console.log("\n***** INSERT SEVERAL STUDENTS *****");
    // const count = await insertStudents([
    //   { firstName: "Bruce", lastName: "Wayne" },
    //   {
    //     firstName: "Clark",
    //     lastName: "Kent",
    //     superPowers: ["speed reading", "fast calculation", "laser beam eyes"],
    //   },
    //   {
    //     firstName: "Liu",
    //     lastName: "Kang",
    //     martialArts: [{ art: "Karate", discipline: "Kenpo" }],
    //   },
    // ]);
    // console.log(`${count} students were inserted`);
    // printStudents(await getStudents());
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  } finally {
    await client.close();
    console.log("\nConnection Closed");
  }
};

main();
