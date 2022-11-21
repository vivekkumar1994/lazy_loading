export const LoadingCard = () => {
    return (
        <div>
            <div></div>
            <div>
                <div></div>
            </div>
        </div>
    );
}

export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4, 5, 6];
    return (
        <div className="grid grid-cols-3 gap-4 content-start">
        {loadPages.map(num => {return <LoadingCard />})}
        </div>
    );
}