from socketIO_client import SocketIO, LoggingNamespace

socketIO = SocketIO('localhost', 3000, LoggingNamespace)

# Callbacks
def on_connect():
   print('CONNECTION ESTABLISHED!')

def on_disconnect():
   print('LOST CONNECTION!')

def on_reconnect():
   print('CONNECTION REESTABLISHED')

# @param data (JSON) Data from the socket received
def clicked(*data):
   print('Button was clicked!')
   print(data)

   # TODO: Make this do stuff with the robot.

# Default events
socketIO.on('connect', on_connect)
socketIO.on('disconnect', on_disconnect)
socketIO.on('reconnect', on_reconnect)

# Custom events
socketIO.on('clicked', clicked)