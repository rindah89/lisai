const SearchPage = ({
    searchParams,
}: {
    searchParams: { query: string }
}) => {
    const { query } = searchParams;

    return (
        <div>searchPage for {query}</div>
    )
}

export default SearchPage