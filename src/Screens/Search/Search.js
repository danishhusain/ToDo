// import React, { useState } from "react";
// import {
// 	View,
// 	Text,
// 	TextInput,
// 	TouchableOpacity,
// 	FlatList,
// 	StyleSheet,
// } from "react-native";

// const Search = () => {
// 	const [task, setTask] = useState("");
// 	const [tasks, setTasks] = useState([]);
// 	const [editIndex, setEditIndex] = useState(-1);

// 	const handleAddTask = () => {
// 		if (task) {
// 			if (editIndex !== -1) {
// 				// Edit existing task
// 				const updatedTasks = [...tasks];
// 				updatedTasks[editIndex] = task;
// 				setTasks(updatedTasks);
// 				setEditIndex(-1);
// 			} else {
// 				// Add new task
// 				setTasks([...tasks, task]);
// 			}
// 			setTask("");
// 		}
// 	};

// 	const handleEditTask = (index) => {
// 		const taskToEdit = tasks[index];
// 		setTask(taskToEdit);
// 		setEditIndex(index);
// 	};

// 	const handleDeleteTask = (index) => {
// 		const updatedTasks = [...tasks];
// 		updatedTasks.splice(index, 1);
// 		setTasks(updatedTasks);
// 	};

// 	const renderItem = ({ item, index }) => (
// 		<View style={styles.task}>
// 			<Text
// 				style={styles.itemList}>{item}</Text>
// 			<View
// 				style={styles.taskButtons}>
// 				<TouchableOpacity
// 					onPress={() => handleEditTask(index)}>
// 					<Text
// 						style={styles.editButton}>Edit</Text>
// 				</TouchableOpacity>
// 				<TouchableOpacity
// 					onPress={() => handleDeleteTask(index)}>
// 					<Text
// 						style={styles.deleteButton}>Delete</Text>
// 				</TouchableOpacity>
// 			</View>
// 		</View>
// 	);

// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.title}>ToDo App</Text>
// 			<TextInput
// 				style={styles.input}
// 				placeholder="Enter task"
// 				value={task}
// 				onChangeText={(text) => setTask(text)}
// 			/>
// 			<TouchableOpacity
// 				style={styles.addButton}
// 				onPress={handleAddTask}>
// 				<Text style={styles.addButtonText}>
// 					{editIndex !== -1 ? "Update Task" : "Add Task"}
// 				</Text>
// 			</TouchableOpacity>
// 			<FlatList
// 				data={tasks}
// 				renderItem={renderItem}
// 				keyExtractor={(item, index) => index.toString()}
// 			/>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		padding: 40,
// 		marginTop: 40,
// 	},
// 	title: {
// 		fontSize: 24,
// 		fontWeight: "bold",
// 		marginBottom: 20,
// 	},
// 	heading: {
// 		fontSize: 30,
// 		fontWeight: "bold",
// 		marginBottom: 7,
// 		color: "green",
// 	},
// 	input: {
// 		borderWidth: 3,
// 		borderColor: "#ccc",
// 		padding: 10,
// 		marginBottom: 10,
// 		borderRadius: 10,
// 		fontSize: 18,
// 	},
// 	addButton: {
// 		backgroundColor: "green",
// 		padding: 10,
// 		borderRadius: 5,
// 		marginBottom: 10,
// 	},
// 	addButtonText: {
// 		color: "white",
// 		fontWeight: "bold",
// 		textAlign: "center",
// 		fontSize: 18,
// 	},
// 	task: {
// 		flexDirection: "row",
// 		justifyContent: "space-between",
// 		alignItems: "center",
// 		marginBottom: 15,
// 		fontSize: 18,
// 	},
// 	itemList: {
// 		fontSize: 19,
// 	},
// 	taskButtons: {
// 		flexDirection: "row",
// 	},
// 	editButton: {
// 		marginRight: 10,
// 		color: "green",
// 		fontWeight: "bold",
// 		fontSize: 18,
// 	},
// 	deleteButton: {
// 		color: "red",
// 		fontWeight: "bold",
// 		fontSize: 18,
// 	},
// });

// export default Search;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from 'react-native';

// export default Search = () => {
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     if (task.trim() === '') return;

//     setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
//     setTask('');
//   };

//   const toggleComplete = (id) => {
//     const updatedTasks = tasks.map((t) =>
//       t.id === id ? { ...t, completed: !t.completed } : t
//     );
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (id) => {
//     const updatedTasks = tasks.filter((t) => t.id !== id);
//     setTasks(updatedTasks);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Todo App</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Add a task"
//           onChangeText={(text) => setTask(text)}
//           value={task}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={addTask}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.taskContainer}>
//             <TouchableOpacity
//               style={styles.checkbox}
//               onPress={() => toggleComplete(item.id)}
//             >
//               {item.completed ? (
//                 <Text style={styles.checkmark}>✓</Text>
//               ) : (
//                 <Text style={styles.unchecked}></Text>
//               )}
//             </TouchableOpacity>
//             <Text
//               style={[
//                 styles.taskText,
//                 { textDecorationLine: item.completed ? 'line-through' : 'none' },
//               ]}
//             >
//               {item.text}
//             </Text>
//             <TouchableOpacity
//               style={styles.deleteButton}
//               onPress={() => deleteTask(item.id)}
//             >
//               <Text style={styles.deleteButtonText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//   },
//   addButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
//   addButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   taskContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   checkbox: {
//     width: 24,
//     height: 24,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checkmark: {
//     fontSize: 18,
//   },
//   unchecked: {},
//   taskText: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     padding: 8,
//     borderRadius: 5,
//   },
//   deleteButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });




import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default  Search=()=> {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;

    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    setSelectedTasks([]);
  };

  const updateNote = () => {
    // Implement logic to update the note here
    // You can use the 'note' state for this purpose
  };

  const toggleSelectTask = (id) => {
    const isSelected = selectedTasks.includes(id);
    if (isSelected) {
      const updatedSelectedTasks = selectedTasks.filter((taskId) => taskId !== id);
      setSelectedTasks(updatedSelectedTasks);
    } else {
      setSelectedTasks([...selectedTasks, id]);
    }
  };

  const deleteSelectedTasks = () => {
    const updatedTasks = tasks.filter((t) => !selectedTasks.includes(t.id));
    setTasks(updatedTasks);
    setSelectedTasks([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <TextInput
          style={styles.input}
          placeholder="Note"
          onChangeText={(text) => setNote(text)}
          value={note}
        />
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.updateButton} onPress={updateNote}>
          <Text style={styles.updateButtonText}>Update Note</Text>
        </TouchableOpacity>
        {selectedTasks.length > 0 && (
          <TouchableOpacity style={styles.deleteSelectedButton} onPress={deleteSelectedTasks}>
            <Text style={styles.deleteSelectedButtonText}>Delete Selected</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => toggleComplete(item.id)}
            >
              {item.completed ? (
                <Text style={styles.checkmark}>✓</Text>
              ) : (
                <Text style={styles.unchecked}></Text>
              )}
            </TouchableOpacity>
            <Text
              style={[
                styles.taskText,
                { textDecorationLine: item.completed ? 'line-through' : 'none' },
              ]}
            >
              {item.text}
            </Text>
            <TouchableOpacity
              style={[
                styles.selectButton,
                {
                  backgroundColor: selectedTasks.includes(item.id)
                    ? 'blue'
                    : 'transparent',
                },
              ]}
              onPress={() => toggleSelectTask(item.id)}
            >
              <Text style={styles.selectButtonText}>Select</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTask(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  deleteSelectedButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteSelectedButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 18,
  },
  unchecked: {},
  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  selectButton: {
    backgroundColor: 'transparent',
    padding: 8,
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 1,
  },
  selectButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
