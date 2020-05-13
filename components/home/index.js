import React from "react";
import Link from "next/link";
import { inject, observer } from "mobx-react";
// local files
import "../../styles/styles.scss";

export const HomeComponent = inject("store")(observer(({ store }) => {
  const { auth } = store;
  const [ tasks, setTasks ] = React.useState(auth.tasks);
  
  React.useEffect(() => {
    // if (auth.tasks.length > 0 && tasks.length === 0) {
    //   setTasks(auth.tasks);
    // }
    console.log(auth.tasks);
    
  }, [auth.tasks]);
  
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/news"><a>News</a></Link>
          </li>
        </ul>
      </nav>
      <h1 className="example">
        Welcome to HandyDay!
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus ea molestias nobis possimus, quam sequi similique. Delectus eveniet explicabo itaque necessitatibus nemo, quo recusandae repudiandae totam ullam voluptate, voluptatum!</p>
      
      {tasks && tasks.length > 0 && tasks.map(task => {
        return <div key={task._id}>
          <h2>{task.title}</h2>
        </div>
      })}
    </main>
  )
}));
