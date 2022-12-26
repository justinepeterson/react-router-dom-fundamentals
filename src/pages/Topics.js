import React from 'react'
import { Link, Route, useParams, useRouteMatch } from "react-router-dom"



const topics = [
    {
        id: 1,
        title: "Basic JavaScript",
        slug: "basic-javascript",
        subTopics: [
            {
                id: 1,
                title: "JavaScript Operators",
                slug: "javascript-operators"
            },
            {
                id: 2,
                title: "JavaScript Data Types",
                slug: "javascript-data-types"
            }
        ]
    },
    {
        id: 2,
        title: "Modern JavaScript",
        slug: "modern-javascript",
        subTopics: [
            {
                id: 1,
                title: "let and const",
                slug: "let-and-const"
            },
            {
                id: 2,
                title: "Arrow Functions",
                slug: "arrow-functions"
            }
        ]
    },
    {
        id: 3,
        title: "React",
        slug: "react",
        subTopics: [
            {
                id: 1,
                title: "JSX Basics",
                slug: "jsx-basics"
            },
            {
                id: 2,
                title: "Custom Hooks",
                slug: "custom-hooks"
            }
        ]
    }
];

const SubTopic = (props) => {
    const { topic, subtopic } = useParams();
    const selectedTopic = topics.find((item) => item.slug === topic);
    const subTitle = selectedTopic?.subTopics?.find(
        (item) => item.slug === subtopic
    );

    return (
        <h3>
            {selectedTopic?.title} - {subTitle?.title}
        </h3>
    );
};


function Topic(props) {
    const { topic: slug } = useParams();
    const { path, url, params } = useRouteMatch();
    const selectedTopic = topics.find((topic) => topic.slug === slug);
    const subTopics = selectedTopic?.subTopics;

    return (
        <div>
            <h2>Selected a Topic</h2>
            <ul className="topics-list">
                {subTopics &&
                    subTopics.map((topic) => (
                        <li key={topic.id}>
                            <Link to={`${url}/${topic.slug}`}>{topic.title}</Link>
                        </li>
                    ))}
            </ul>

            <Route path={`${path}/:subtopic`} component={SubTopic} />
        </div>
    )
}

function Topics() {
    return (
        <div>
            <h2>Topics</h2>
            <ul className='topics-list'>
                {
                    topics.map((topic) => (
                        <li key={topic.id}>
                            <Link to={`/topics/${topic.slug}`}>{topic.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <Route path="/topics/:topic" component={Topic} />
        </div>
    )
}



export default Topics