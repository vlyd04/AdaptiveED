
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from PyPDF2 import PdfReader
import pyttsx3
import os

app = Flask(__name__)
CORS(app)

@app.route('/convert_to_braille', methods=['POST'])
def convert_to_braille():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and file.filename.endswith('.pdf'):
        file_path = os.path.join('uploads', file.filename)
        file.save(file_path)
        text = extract_text_from_pdf(file_path)
        braille_text = convert_text_to_braille(text)
        braille_path = 'output.txt'
        with open(braille_path, 'w', encoding='utf-8') as f:
            f.write(braille_text)
        return send_file(braille_path, as_attachment=True, download_name='output.txt')
    return jsonify({'error': 'Invalid file format'}), 400

@app.route('/convert_to_audio', methods=['POST'])
def convert_to_audio():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and file.filename.endswith('.pdf'):
        file_path = os.path.join('uploads', file.filename)
        file.save(file_path)
        try:
            text = extract_text_from_pdf(file_path)
            audio_path = 'output.mp3'
            convert_text_to_audio(text, audio_path)
            return send_file(audio_path, as_attachment=True)
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    return jsonify({'error': 'Invalid file format'}), 400

@app.route('/transcribe_text', methods=['POST'])
def transcribe_text():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and file.filename.endswith('.pdf'):
        file_path = os.path.join('uploads', file.filename)
        file.save(file_path)
        text = extract_text_from_pdf(file_path)
        transcription_path = 'transcription.txt'
        with open(transcription_path, 'w', encoding='utf-8') as f:
            f.write(text)
        return send_file(transcription_path, as_attachment=True, download_name='transcription.txt')
    return jsonify({'error': 'Invalid file format'}), 400

def extract_text_from_pdf(pdf_path):
    pdf = PdfReader(pdf_path)
    text = ''
    for page in pdf.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text
    return text

def convert_text_to_braille(text):
    braille_map = {
        'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋',
        'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚', 'k': '⠅', 'l': '⠇',
        'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏', 'q': '⠟', 'r': '⠗',
        's': '⠎', 't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭',
        'y': '⠽', 'z': '⠵', ' ': ' '
    }
    braille_text = ''.join(braille_map.get(char.lower(), char) for char in text)
    return braille_text

def convert_text_to_audio(text, audio_path):
    engine = pyttsx3.init()
    engine.save_to_file(text, audio_path)
    engine.runAndWait()
    return audio_path

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)


