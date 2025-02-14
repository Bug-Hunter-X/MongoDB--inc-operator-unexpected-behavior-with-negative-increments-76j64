```javascript
// Solution using conditional update to prevent negative values
db.collection('counters').updateOne( { _id: 'myCounter', sequence: { $gt: 0 } }, { $inc: { sequence: -1 } } );
```