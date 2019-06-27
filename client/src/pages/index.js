import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// Styled Components
import Layout from '../componentsStyled/Layout/Layout.js';
// Components
import Header from '../components/Header/Header.js';

export default () => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

// // This query is executed at build time by Gatsby.
// export const GatsbyQuery = graphql`
//   {
//     xivapi {
//       freeCompany(lodestoneID: "9232379236109559306", getMembers: true) {
//         Active
//         ActiveMemberCount
//         Crest
//         Estate {
//           Greeting
//           Name
//           Plot
//         }
//         Focus {
//           Icon
//           Name
//           Status
//         }
//         Formed
//         FreeCompanyMembers {
//           Avatar
//           ID
//           Name
//           Rank
//           RankIcon
//           Server
//         }
//         GrandCompany
//         ID
//         Name
//         ParseDate
//         Rank
//         Ranking {
//           Monthly
//           Weekly
//         }
//         Recruitment
//         Reputation {
//           Name
//           Progress
//           Rank
//         }
//         Seeking {
//           Icon
//           Name
//           Status
//         }
//         Server
//         Slogan
//         Tag
//       }
//     }
//   }
// `;

// // This query is executed at run time by Apollo.
// const APOLLO_QUERY = gql`
//   {
//     xivapi {
//       freeCompany(lodestoneID: "9232379236109559306", getMembers: true) {
//         Name
//       }
//     }
//   }
// `;

// const renderFcMembers = members => {
//   return members.map(member => <li>{member.Name}</li>);
// };

// export default ({
//   data: {
//     xivapi: { freeCompany },
//   },
// }) => {
//   return <ul>{renderFcMembers(freeCompany.FreeCompanyMembers)}</ul>;
// };
