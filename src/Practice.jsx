export const Practice = () =>{
   // return <h1>hello</h1>
    const students = [6,8];
    return(
        <>
            {/* 1st method: */}
            <p>{students.length === 0 && "No student found"}</p>
            <p>No of students :{students.length}</p>

         {/* 2nd method: */}
            {/* <p>{!students.length === 0 && "No student found"}</p>
            <p>No of students :{students.length}</p> */}
        </>

    );
}