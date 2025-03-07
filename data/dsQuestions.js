const dsQuestions = [
  {
    text: "Which data structure uses FIFO (First In, First Out) principle?",
    option: [
      { text: "Queue", isCorrect: true },
      { text: "Stack", isCorrect: false },
      { text: "Linked List", isCorrect: false },
      { text: "Tree", isCorrect: false },
    ],
  },
  {
    text: "Which data structure uses LIFO (Last In, First Out) principle?",
    option: [
      { text: "Stack", isCorrect: true },
      { text: "Queue", isCorrect: false },
      { text: "Graph", isCorrect: false },
      { text: "Array", isCorrect: false },
    ],
  },
  {
    text: "What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?",
    option: [
      { text: "O(log n)", isCorrect: true },
      { text: "O(n)", isCorrect: false },
      { text: "O(1)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is a linear data structure?",
    option: [
      { text: "Array", isCorrect: true },
      { text: "Tree", isCorrect: false },
      { text: "Graph", isCorrect: false },
      { text: "Hash Table", isCorrect: false },
    ],
  },
  {
    text: "Which data structure can be used to implement a priority queue?",
    option: [
      { text: "Heap", isCorrect: true },
      { text: "Stack", isCorrect: false },
      { text: "Linked List", isCorrect: false },
      { text: "Queue", isCorrect: false },
    ],
  },
  {
    text: "Which data structure is most suitable for implementing recursion?",
    option: [
      { text: "Stack", isCorrect: true },
      { text: "Queue", isCorrect: false },
      { text: "Tree", isCorrect: false },
      { text: "Array", isCorrect: false },
    ],
  },
  {
    text: "What is the worst-case time complexity of linear search?",
    option: [
      { text: "O(n)", isCorrect: true },
      { text: "O(log n)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
      { text: "O(1)", isCorrect: false },
    ],
  },
  {
    text: "Which of the following data structures is non-linear?",
    option: [
      { text: "Tree", isCorrect: true },
      { text: "Array", isCorrect: false },
      { text: "Stack", isCorrect: false },
      { text: "Queue", isCorrect: false },
    ],
  },
  {
    text: "Which data structure supports direct access by index?",
    option: [
      { text: "Array", isCorrect: true },
      { text: "Linked List", isCorrect: false },
      { text: "Stack", isCorrect: false },
      { text: "Queue", isCorrect: false },
    ],
  },
  {
    text: "What is the time complexity for inserting an element at the beginning of a linked list?",
    option: [
      { text: "O(1)", isCorrect: true },
      { text: "O(n)", isCorrect: false },
      { text: "O(log n)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    text: "Which of the following operations is fastest in a hash table?",
    option: [
      { text: "Search", isCorrect: true },
      { text: "Traversal", isCorrect: false },
      { text: "Sorting", isCorrect: false },
      { text: "Insertion at the end", isCorrect: false },
    ],
  },
  {
    text: "What is a binary tree where every non-leaf node has exactly two children?",
    option: [
      { text: "Full Binary Tree", isCorrect: true },
      { text: "Complete Binary Tree", isCorrect: false },
      { text: "Balanced Tree", isCorrect: false },
      { text: "Heap", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is NOT a data structure?",
    option: [
      { text: "Loop", isCorrect: true },
      { text: "Stack", isCorrect: false },
      { text: "Queue", isCorrect: false },
      { text: "Graph", isCorrect: false },
    ],
  },
  {
    text: "Which of these data structures is best for hierarchical data?",
    option: [
      { text: "Tree", isCorrect: true },
      { text: "Array", isCorrect: false },
      { text: "Stack", isCorrect: false },
      { text: "Queue", isCorrect: false },
    ],
  },
  {
    text: "Which traversal method processes nodes level by level in a tree?",
    option: [
      { text: "Level Order", isCorrect: true },
      { text: "Inorder", isCorrect: false },
      { text: "Preorder", isCorrect: false },
      { text: "Postorder", isCorrect: false },
    ],
  },
  {
    text: "What does a graph consist of?",
    option: [
      { text: "Vertices and Edges", isCorrect: true },
      { text: "Nodes and Lists", isCorrect: false },
      { text: "Points and Lines", isCorrect: false },
      { text: "Arrays and Pointers", isCorrect: false },
    ],
  },
  {
    text: "What is the worst-case time complexity for searching in a hash table?",
    option: [
      { text: "O(n)", isCorrect: true },
      { text: "O(1)", isCorrect: false },
      { text: "O(log n)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    text: "Which algorithm uses a stack to traverse a graph?",
    option: [
      { text: "Depth First Search (DFS)", isCorrect: true },
      { text: "Breadth First Search (BFS)", isCorrect: false },
      { text: "Dijkstra's Algorithm", isCorrect: false },
      { text: "Kruskal's Algorithm", isCorrect: false },
    ],
  },
  {
    text: "Which data structure allows constant-time lookup on average?",
    option: [
      { text: "Hash Table", isCorrect: true },
      { text: "Stack", isCorrect: false },
      { text: "Queue", isCorrect: false },
      { text: "Tree", isCorrect: false },
    ],
  },
  {
    text: "What is the time complexity of accessing an element in an array by index?",
    option: [
      { text: "O(1)", isCorrect: true },
      { text: "O(log n)", isCorrect: false },
      { text: "O(n)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    text: "Which data structure is used for implementing undo operations?",
    option: [
      { text: "Stack", isCorrect: true },
      { text: "Queue", isCorrect: false },
      { text: "Heap", isCorrect: false },
      { text: "Tree", isCorrect: false },
    ],
  },
  {
    text: "Which traversal method visits the root node last?",
    option: [
      { text: "Postorder", isCorrect: true },
      { text: "Inorder", isCorrect: false },
      { text: "Preorder", isCorrect: false },
      { text: "Level Order", isCorrect: false },
    ],
  },
  {
    text: "Which data structure is ideal for implementing recursion?",
    option: [
      { text: "Stack", isCorrect: true },
      { text: "Queue", isCorrect: false },
      { text: "Graph", isCorrect: false },
      { text: "Heap", isCorrect: false },
    ],
  },
  {
    text: "Which type of binary tree has all levels completely filled except possibly the last?",
    option: [
      { text: "Complete Binary Tree", isCorrect: true },
      { text: "Full Binary Tree", isCorrect: false },
      { text: "Balanced Binary Tree", isCorrect: false },
      { text: "Heap", isCorrect: false },
    ],
  },
  {
    text: "What is the main characteristic of a circular linked list?",
    option: [
      { text: "The last node points to the first node", isCorrect: true },
      { text: "It uses two pointers", isCorrect: false },
      { text: "It allows backward traversal", isCorrect: false },
      { text: "Nodes are stored sequentially", isCorrect: false },
    ],
  },
  {
    text: "Which algorithm is used to find the shortest path in a weighted graph?",
    option: [
      { text: "Dijkstra's Algorithm", isCorrect: true },
      { text: "Depth First Search", isCorrect: false },
      { text: "Prim's Algorithm", isCorrect: false },
      { text: "Kruskal's Algorithm", isCorrect: false },
    ],
  },
  {
    text: "Which of the following operations takes O(1) time in a stack?",
    option: [
      { text: "Push", isCorrect: true },
      { text: "Traversal", isCorrect: false },
      { text: "Search", isCorrect: false },
      { text: "Sorting", isCorrect: false },
    ],
  },
  {
    text: "Which data structure supports breadth-first traversal?",
    option: [
      { text: "Queue", isCorrect: true },
      { text: "Stack", isCorrect: false },
      { text: "Heap", isCorrect: false },
      { text: "Array", isCorrect: false },
    ],
  },
  {
    text: "In which data structure is insertion performed only at one end and deletion at the other?",
    option: [
      { text: "Queue", isCorrect: true },
      { text: "Stack", isCorrect: false },
      { text: "Array", isCorrect: false },
      { text: "Heap", isCorrect: false },
    ],
  },
  {
    text: "Which data structure is used to detect cycles in a graph?",
    option: [
      { text: "Depth First Search", isCorrect: true },
      { text: "Breadth First Search", isCorrect: false },
      { text: "Dijkstra's Algorithm", isCorrect: false },
      { text: "Prim's Algorithm", isCorrect: false },
    ],
  },
  {
    text: "Which data structure stores elements in a hierarchical manner?",
    option: [
      { text: "Tree", isCorrect: true },
      { text: "Queue", isCorrect: false },
      { text: "Stack", isCorrect: false },
      { text: "Hash Table", isCorrect: false },
    ],
  },
  {
    text: "What is the primary advantage of a doubly linked list?",
    option: [
      { text: "Efficient backward traversal", isCorrect: true },
      { text: "Constant time insertion", isCorrect: false },
      { text: "Less memory usage", isCorrect: false },
      { text: "Simpler implementation", isCorrect: false },
    ],
  },
  {
    text: "Which data structure provides the best performance for priority queues?",
    option: [
      { text: "Heap", isCorrect: true },
      { text: "Stack", isCorrect: false },
      { text: "Queue", isCorrect: false },
      { text: "Graph", isCorrect: false },
    ],
  },
  {
    text: "In a hash table, what happens when two keys hash to the same value?",
    option: [
      { text: "A collision occurs", isCorrect: true },
      { text: "The table resizes", isCorrect: false },
      { text: "The key is rejected", isCorrect: false },
      { text: "The key replaces the old one", isCorrect: false },
    ],
  },
  {
    text: "Which type of graph does not have cycles?",
    option: [
      { text: "Acyclic Graph", isCorrect: true },
      { text: "Cyclic Graph", isCorrect: false },
      { text: "Connected Graph", isCorrect: false },
      { text: "Weighted Graph", isCorrect: false },
    ],
  },
  {
    text: "What is the time complexity of searching in a sorted array using binary search?",
    option: [
      { text: "O(log n)", isCorrect: true },
      { text: "O(n)", isCorrect: false },
      { text: "O(1)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is an application of a stack?",
    option: [
      { text: "Function call management", isCorrect: true },
      { text: "Job scheduling", isCorrect: false },
      { text: "Breadth-first search", isCorrect: false },
      { text: "Cache management", isCorrect: false },
    ],
  },
  {
    text: "Which data structure uses a hash function for indexing?",
    option: [
      { text: "Hash Table", isCorrect: true },
      { text: "Heap", isCorrect: false },
      { text: "Queue", isCorrect: false },
      { text: "Linked List", isCorrect: false },
    ],
  },
  {
    text: "Which operation in a linked list takes O(n) time in the worst case?",
    option: [
      { text: "Search", isCorrect: true },
      { text: "Insertion at head", isCorrect: false },
      { text: "Traversal", isCorrect: false },
      { text: "Deletion at head", isCorrect: false },
    ],
  },
];

module.exports = dsQuestions;
