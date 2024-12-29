import { useState, useEffect } from 'react';
import './Sidebar.css';
import TagsList from './TagsList';

const Sidebar = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/tags')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTags(data);
            })
            .catch(error => console.error('Error fetching tags:', error));
    }, []);

    return (
        <div className="side-content">
            <div className="side-cont">
                <div>
                    Search (<a href="#">advanced</a>)
                </div>
                <input type="text" />
                <div>Hidden posts 0</div>
                <div>
                    <TagsList tags={tags} title="Tags" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
