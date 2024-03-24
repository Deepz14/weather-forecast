
export const ErrorDisplay = ({searchInput, onTryAgain}) => {
    return (
        <div className="error-display">
            <h4>Sorry, we couldn't find <span className="searchText">{searchInput}.</span> Please double-check the spelling and try again.</h4>
            <button onClick={onTryAgain} className="btn-try-again">Try again</button>
        </div>
    )
}


export default ErrorDisplay;