import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendlist/friends.json';
import transactions from './transaction_history/transactions.json';
import { Profile } from './profile/Profile.js';
import { Statistics } from './statistics/Statistics.js';
import { FriendList } from './friendlist/FriendList.js';
import { FriendListItem } from './friendlist_item/FriendListItem.js';
import { TransactionHistory } from './transaction_history/TransactionHistory.js';

export const App = () => {
  return (
    <div
      style={{
        height: '300vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        backgroundColor: 'lightgray',
      }}
    >
      React User Profile
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      User upload statistics
      <Statistics title="Upload stats" stats={data} />
      User's friendlist with active/inactive status
      <FriendList friends={friends}>
        <FriendListItem friends={friends} />
      </FriendList>
      Users's transaction history
      <TransactionHistory items={transactions} />
    </div>
  );
};
