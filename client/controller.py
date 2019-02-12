import socketio

sio = socketio.Client()

sio.connect('http://localhost:5555')

@sio.on('connect')
def on_connect():
   print('Connection successful')

@sio.on('clicked')
def on_clicked(data):
   print('click event recieved!');

   # TODO: Make this do stuff with the robot arm

@sio.on('disconnect')
def on_disconnect():
   print('Disconnected!')
