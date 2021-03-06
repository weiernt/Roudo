from flask import Flask, render_template

from flask import Flask
app = Flask(__name__, static_url_path='/static')

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')
	
@app.route('/login')
def login():
	return render_template('login.html')
	
	
if __name__ == "__main__":
	
	app.run(debug=True)
	
	# below use for testing url_for locations
	# with app.test_request_context():
		# print(url_for('index'))
		# print(url_for('login'))
		# print(url_for('login', next='/'))
		# print(url_for('profile', username='John Doe'))