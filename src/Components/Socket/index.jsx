import io from "socket.io-client";

// Create a class to handle socket connection
class Socket {
  constructor() {
    this.socket = io("http://localhost:5000");
  }

  // Method to handle joining a room
  joinRoom(username, room) {
    this.socket.emit("join", { username, room });
  }

  sendMessage(username, room, message, gender, data) {
    this.socket.emit("text", { username, room, message, gender, data });
  }

  emit(event, data) {
    this.socket.emit(event, data);
  }

  on(event, callback) {
    this.socket.on(event, callback);
  }
}

// Export the class
export default Socket;
