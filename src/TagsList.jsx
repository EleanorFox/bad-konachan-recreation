import './TagsList.css'
const TagsList = ({tags, title}) => {
    return (
        <div className="tag-list">
            <div className="tags-title">{title}</div>
            {tags.map((tag)=>(
                <div className="tags-preview" key={tag.id}>
                    <div className="tags"><a href="#" style={{color: tag.titleColor}}>{tag.title}</a></div>
                </div>
            ))}
        </div>
    );
}
 
export default TagsList;
