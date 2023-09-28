import styled from "styled-components";

const Table = () => {
    return(
        <PopUp>
                <table style={{ borderCollapse: "collapse" }}>
                    <h2 style={{ display: "relative" }}>Details</h2>
                    <tr>
                        // replace with json parameters
                    </tr>
                    <tr>
                        <th>Project Description</th>
                        <td>This  is the project description</td>
                    </tr>
                    <tr>
                        <th>Project Document</th>
                        <td>Row 2 Description</td>
                    </tr>
                    <tr>
                        <th>Tech Stack</th>
                        <td>Row 3 Description</td>
                    </tr>
                    <tr>
                        <th>Team Details</th>
                        <td>Row 3 Description</td>
                    </tr>
                    <tr>
                        <th>Links</th>
                        <td>Row 3 Description</td>
                    </tr>
                </table>
        </PopUp>
    )
}

const PopUp = styled.table`
border-collapse: collapse !important;
margin: 0 auto;
z-index: 100;
th , td{
    border: 1px solid #b3bab5;
    padding: 8px;
    text-align: left;
    background-color: #f2f2f2;
}
th{
    background-color: #f2f2f2;
}
td{
    width : 1500px;
}
`;


export default Table