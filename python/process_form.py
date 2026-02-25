from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process_form', methods=['POST'])
def process_form():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    
    # Process the form data here
    return jsonify({'status': 'success', 'message': 'Form data received.'})

if __name__ == '__main__':
    app.run(debug=True)
