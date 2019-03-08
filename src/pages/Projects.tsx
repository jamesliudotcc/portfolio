import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const projects = [
  {
    name: 'Fox and Geese',
    id: 'fox-and-geese',
    description:
      'I created a classic board game similar to Hneftafl (Viking chess) but with cuter pieces--a fox and geese instead of a king and warrirors. I did it without using any game libraries, but I did use Typescript and ImmutableJS. I generated the board by having javascript render SVG.',
    challenge:
      'To keep track of game state, I tried to follow the Model-Update-View architecture borrowed from Elm and Redux. I had a hard time understanding how to get the game state to evolve using immutable data structures, so there are all kinds of inelegant shims and hacks in the code.',
    imageUrl: 'foxandgeese.png',
    github: 'https://www.github.com/jamesliudotcc/fox-and-geese',
    deployed: 'https://jamesliudotcc.github.io/fox-and-geese/',
    techStack: [
      { name: 'Javascript', icon: '.svg' },
      { name: 'Typescript', icon: '.svg' },
    ],
  },
  {
    name: 'Wallet Photos',
    id: 'wallet-photos',
    description:
      'I developed a privacy-centric server-side-rendered photo-sharing web app using node, Express, typescript, postgresql, typeorm. Photos get uploaded, users can log in and see them, but only after approval (authentication and authorization are separate layers) and there are comments and a like button.',
    challenge:
      "I spent two whole days attempting to implement passwordless authentication, like Slack uses. Passwordless turns out to be difficult under the hood, depsite how seamless it is from a user perspective, and I was not able to get it done with enough time to finish the rest of my app.  I actually spent most of my best hours of project week on that problem,  so not getting it done was not for lack of effort. I'm ready to give it another go, now that I understand databases, cryptography, and user sessions better having built a few more projects.",
    imageUrl: 'comment.png',
    github: 'https://www.github.com/jamesliudotcc/',
    deployed: 'http://jamesbridgetpenelope.com',
    techStack: [
      { name: 'Javascript', icon: '.svg' },
      { name: 'Typescript', icon: '.svg' },
    ],
  },
  {
    name: 'Syllaboard',
    id: 'syllaboard',
    description:
      'Our team developed an assignment tracking system appropriate for use at an immersive coding school using Mongo, Typescript, Express, Redux, React, and MaterialUI. Users may have three different roles, student, instructor, and administrator. I mostly did the backend, although I had some help, and I helped on the front end as well.',
    challenge:
      'The project was really big for a single week. We also chose to use Mongo instead of a relational database even though the data was plainly relational in strucutre. The idea was to learn something about using a document database.',
    imageUrl: 'syllaboard.png',
    github: 'https://www.github.com/jamesliudotcc/',
    deployed: 'http://something',
    techStack: [
      { name: 'Javascript', icon: '.svg' },
      { name: 'Typescript', icon: '.svg' },
    ],
  },
  {
    name: 'Spotdash',
    id: 'spotdash',
    description:
      'We made a simple app to display where bike racks should be prioritized by the city. We used the number of Yelp reviews as a proxy for how busy a place is, and a city dataset of where the bike racks are to determine the distance to the nearest bike rack. The data was processed using Python, and the results were pushed into a MongoDB instance, which we then rendered using Express, EJS, Mapbox, and Materialize.',
    challenge:
      "The biggest challenge was how short the hackathon was. We had 2 days to come up with an idea, and then implement something presentable. We eschewed a richer data model and a more interactive UI design using React in order to finish. We coded up to the last minute while the designers created a PowerPoint deck, also up to the last minute. Mobile doesn't work because the maps time out, something we could have solved by making the front end smarter.",
    imageUrl: 'spotdash.png',
    github: 'https://github.com/jamesliudotcc/bike-rack-putter-backend',
    deployed: 'https://hackathon-spotdash.herokuapp.com',
    techStack: [
      { name: 'Javascript', icon: '.svg' },
      { name: 'Typescript', icon: '.svg' },
    ],
  },
  {
    name: 'Shared Grocery List',
    id: 'shared-grocery-list',
    description:
      'I made a grocery list app to be shared between members of a household which can be filtered by store to facilitate splitting up trips to different stores using GraphQL.',
    challenge:
      'GraphQL is not ready for beginners the way that, say, React is. The tutorials assume a level of technical competence, and the documentation even more. The GraphQL demos make it look so easy, and in a sense, querying from Graphiql is easy, and you just use those queries in your front end. But even a little bit past that, and things start getting difficult. I found myself having to reach beyond my understanding repeatedly. As a result, I made slow progress.',
    imageUrl: 'grocerylist.png',
    github: 'https://hackathon-spotdash.herokuapp.com',
    techStack: [
      { name: 'Javascript', icon: '.svg' },
      { name: 'Typescript', icon: '.svg' },
    ],
  },
  {
    name: 'Portfolio',
    id: 'portfolio',
    description:
      'Under the principle of least power, I should have used something other than React to make this, but I wanted more practice with React, and I want a project that would be appropriate to use to learn Gatsby. The Gatsby version will have my developer blog.',
    challenge:
      'CSS, even when wrapped with Tachyons, continues to be a struggle for me. Also, I am not as fluent with getting a web layout together as I wish. I used to lay out a section of my college paper, and then everything was pretty intuitive because it was text-heavy and the constraints were clear. The web is something different, and I it is not intuitive, yet.',
    imageUrl: 'nautilus.jpg',
    github: 'https://hackathon-spotdash.herokuapp.com',
    techStack: [
      { name: 'Javascript', icon: '.svg' },
      { name: 'Typescript', icon: '.svg' },
    ],
  },
];

//@ts-ignore
function Project({ match }) {
  const project = projects.find(({ id }) => id === match.params.topicId);

  return (
    <div className="flex flex-wrap w-100 w-70-l center mv3">
      <div className="dib w-100 w-50-ns tl tr-ns flex flex-row flex-column-ns justify-center ">
        <div className="dib apect-ratio aspect-ratio--1x1 relative">
          <div
            className="dib aspect-ratio--object-ns cover"
            style={{
              // @ts-ignore
              background: `url(${process.env.PUBLIC_URL}/${project.imageUrl})`,
            }}
          />
          {/* <img
            src={project ? `${process.env.PUBLIC_URL}/${project.imageUrl}` : ''}
            alt=""
            className="aspect-ratio--object cover"
          /> */}
        </div>
      </div>
      <div className=" w-100 w-50-ns tl ph2 ">
        <h2 className="mt0 tc tl-ns">{project ? project.name : ''}</h2>
        <p>
          <a href={project ? project.github : '#'}>Github</a>
          <br />
          <a href={project ? project.deployed : '#'}>Deployed</a>
        </p>
        <h3>What</h3>
        <p>{project ? project.description : ''}</p>
        <h3>Biggest Challenge</h3>
        <p>{project ? project.challenge : ''}</p>
      </div>
    </div>
  );
}

//@ts-ignore
function Projects({ match }) {
  return (
    <div>
      <ul className="cf w-100 w-70-l list ph3 ph5-ns pv1 ma0 bb center">
        {projects.map(({ name, id }) => (
          <li
            className="dib mr2 link bg-animate black-80 hover-bg-lightest-blue"
            key={id}
          >
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:topicId`} component={Project} />
    </div>
  );
}

export default Projects;
