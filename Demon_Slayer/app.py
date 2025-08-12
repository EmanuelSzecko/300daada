from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# Rotas para as outras páginas (ainda serão criadas)
@app.route('/tanjiro')
def tanjiro():
    return render_template('tanjiro.html')

@app.route('/personagens')
def personagens():
    return render_template('personagens.html')

@app.route('/hashiras')
def hashiras():
    return render_template('hashiras.html')

@app.route('/viloes')
def viloes():
    return render_template('viloes.html')

@app.route('/tecnicas')
def tecnicas():
    return render_template('tecnicas.html')

@app.route('/curiosidades')
def curiosidades():
    return render_template('curiosidades.html')

if __name__ == '__main__':
    app.run(debug=True)
