const Tablesection = () => {
  const tableHead = [
    {
      colName: "Avatar",
      icon: "🙍🏻‍♂️",
    },
    {
      colName: "Name",
      icon: "📛",
    },
    {
      colName: "Status",
      icon: "✅",
    },
  ];

  const tableData = [
    {
      avatar: "https://cdn-icons-png.flaticon.com/128/9187/9187466.png",
      name: "Alice",
      status: "Active",
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/128/9187/9187466.png",
      name: "Bob",
      status: "Inactive",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📊 User Data</h2>
      <table className="border border-collapse min-w-full">
        <thead>
          <tr>
            {tableHead.map((heading) => (
              <th
                key={heading.colName}
                className="border border-gray-300 px-4 py-2 bg-gray-300"
              >
                {heading.icon}
                {heading.colName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((user, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  height={50}
                  width={50}
                  src={user.avatar}
                  alt="User Image"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td
                className={`border border-gray-300 px-4 py-2 ${
                  user.status === "Active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Tablesection;
