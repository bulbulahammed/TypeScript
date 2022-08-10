type DataFetchProps = { status: "loading" | "success" | "error" };

const DataFetch = ({ status }: DataFetchProps) => {
  if (status === "loading") {
    return <h2>Data is Loading....</h2>;
  } else if (status === "error") {
    return <h2>Error, Data could not fetch</h2>;
  }
  return (
    <div>
      <h2>Data Fetched Successfully</h2>
    </div>
  );
};

export default DataFetch;
