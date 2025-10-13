
# AI Agent with File Reading and Web UI
# Ek complete working agent jo file read karta hai aur web interface ke saath kaam karta hai

import http.server
import socketserver
import json
import urllib.parse
from datetime import datetime
import os

# Agent class jo file read karta hai aur process karta hai
class IntelligentAgent:
    def __init__(self):
        self.memory = []
        self.file_data = None
        
    def read_file(self, filename):
        """File ko read karta hai"""
        try:
            file = open(filename, "r", encoding="utf-8")
            data = file.read()
            file.close()
            self.file_data = data
            return {"success": True, "data": data, "message": "File successfully read!"}
        except Exception as e:
            return {"success": False, "message": f"Error: {str(e)}"}
    
    def analyze_text(self, text):
        """Text ko analyze karta hai"""
        words = text.split()
        lines = text.split('\n')
        
        analysis = {
            "total_words": len(words),
            "total_lines": len(lines),
            "total_characters": len(text),
            "unique_words": len(set(words))
        }
        return analysis
    
    def process_query(self, query, file_content=None):
        """User ke query ko process karta hai"""
        query_lower = query.lower()
        
        if "analyze" in query_lower or "analysis" in query_lower:
            if file_content:
                return self.analyze_text(file_content)
            return {"error": "Pehle file upload karen"}
        
        elif "summarize" in query_lower or "summary" in query_lower:
            if file_content:
                lines = file_content.split('\n')[:5]
                return {"summary": "First 5 lines:", "content": '\n'.join(lines)}
            return {"error": "Pehle file upload karen"}
        
        else:
            return {"response": f"Aapka query tha: {query}", "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

# HTTP Request Handler
class AgentRequestHandler(http.server.SimpleHTTPRequestHandler):
    agent = IntelligentAgent()
    
    def do_GET(self):
        """GET requests ko handle karta hai"""
        if self.path == '/' or self.path == '/index.html':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(self.get_html().encode())
        else:
            super().do_GET()
    
    def do_POST(self):
        """POST requests ko handle karta hai"""
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8'))
            
            if data.get('action') == 'upload_file':
                # File content ko process karna
                file_content = data.get('content', '')
                filename = data.get('filename', 'uploaded_file.txt')
                
                # File ko save karna
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(file_content)
                
                # File ko read karna
                result = self.agent.read_file(filename)
                
                self.send_json_response(result)
                
            elif data.get('action') == 'query':
                query = data.get('query', '')
                file_content = data.get('file_content', '')
                
                result = self.agent.process_query(query, file_content)
                self.send_json_response(result)
                
        except Exception as e:
            self.send_json_response({"error": str(e)})
    
    def send_json_response(self, data):
        """JSON response bhejta hai"""
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())
    
    def get_html(self):
        """Complete HTML UI return karta hai"""
        return """
<!DOCTYPE html>
<html lang="ur">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Agent - File Reader & Analyzer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 1.1em;
            opacity: 0.9;
        }
        
        /* Connect With Us Section */
        .connect-section {
            background: white;
            padding: 25px 30px;
            border-bottom: 3px solid #667eea;
        }
        
        .connect-section h2 {
            color: #667eea;
            margin-bottom: 15px;
            text-align: center;
            font-size: 1.8em;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        .social-links a {
            text-decoration: none;
            color: white;
            padding: 12px 25px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s;
            font-weight: 600;
            font-size: 0.95em;
        }
        
        .social-links a:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .social-links a.github {
            background: #333;
        }
        
        .social-links a.linkedin {
            background: #0077b5;
        }
        
        .social-links a.twitter {
            background: #1DA1F2;
        }
        
        .social-links a.fiverr {
            background: #1DBF73;
        }
        
        .social-links a.upwork {
            background: #14a800;
        }
        
        .content {
            padding: 30px;
        }
        
        .section {
            margin-bottom: 30px;
        }
        
        .section h2 {
            color: #667eea;
            margin-bottom: 15px;
            font-size: 1.5em;
        }
        
        .file-upload {
            border: 3px dashed #667eea;
            border-radius: 10px;
            padding: 30px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .file-upload:hover {
            background: #f0f4ff;
            border-color: #764ba2;
        }
        
        .file-upload input {
            display: none;
        }
        
        .upload-icon {
            font-size: 3em;
            margin-bottom: 10px;
        }
        
        textarea {
            width: 100%;
            min-height: 150px;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 1em;
            resize: vertical;
            margin-bottom: 15px;
        }
        
        input[type="text"] {
            width: 100%;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 1em;
            margin-bottom: 15px;
        }
        
        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 10px;
            font-size: 1.1em;
            cursor: pointer;
            transition: transform 0.2s;
            font-weight: bold;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        button:active {
            transform: translateY(0);
        }
        
        .result-box {
            background: #f0f4ff;
            border-left: 4px solid #667eea;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
            display: none;
        }
        
        .result-box.show {
            display: block;
            animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .result-box h3 {
            color: #667eea;
            margin-bottom: 10px;
        }
        
        .result-box pre {
            background: white;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            white-space: pre-wrap;
        }
        
        .chat-container {
            background: #f9f9f9;
            border-radius: 10px;
            padding: 20px;
            max-height: 400px;
            overflow-y: auto;
        }
        
        .message {
            margin-bottom: 15px;
            padding: 12px;
            border-radius: 10px;
        }
        
        .message.user {
            background: #667eea;
            color: white;
            margin-left: 20%;
        }
        
        .message.agent {
            background: white;
            margin-right: 20%;
            border: 1px solid #ddd;
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            border: 2px solid #667eea;
        }
        
        .stat-card .number {
            font-size: 2em;
            color: #667eea;
            font-weight: bold;
        }
        
        .stat-card .label {
            color: #666;
            margin-top: 5px;
        }
        
        @media (max-width: 768px) {
            .social-links {
                flex-direction: column;
            }
            
            .social-links a {
                width: 100%;
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🤖 AI Agent</h1>
            <p>File Reader, Analyzer & Intelligent Assistant</p>
        </div>
        
        <!-- Connect With Us Section -->
        <div class="connect-section">
            <h2>🤝 Connect With Us</h2>
            <div class="social-links">
                <a href="https://github.com/LeezaSarwar" target="_blank" class="github">
                    <span style="font-size: 1.3em;">🐙</span> GitHub
                </a>
                <a href="https://www.linkedin.com/in/leeza-sarwar-21ab61339/" target="_blank" class="linkedin">
                    <span style="font-size: 1.3em;">💼</span> LinkedIn
                </a>
                <a href="https://x.com/LeezaSarwar" target="_blank" class="twitter">
                    <span style="font-size: 1.3em;">🐦</span> Twitter
                </a>
                <a href="https://www.fiverr.com/leeza_sarwar" target="_blank" class="fiverr">
                    <span style="font-size: 1.3em;">💚</span> Fiverr
                </a>
                <a href="https://www.upwork.com/freelancers/~018898ff181d6b8282" target="_blank" class="upwork">
                    <span style="font-size: 1.3em;">🟢</span> Upwork
                </a>
            </div>
        </div>
        
        <div class="content">
            <!-- File Upload Section -->
            <div class="section">
                <h2>📁 File Upload Karo</h2>
                <div class="file-upload" onclick="document.getElementById('fileInput').click()">
                    <div class="upload-icon">📄</div>
                    <p><strong>Click karo ya file drag karo</strong></p>
                    <p style="color: #666; margin-top: 5px;">Supported: .txt files</p>
                    <input type="file" id="fileInput" accept=".txt" onchange="handleFileSelect(event)">
                </div>
                
                <div id="uploadResult" class="result-box">
                    <h3>File Successfully Loaded! ✅</h3>
                    <pre id="fileContent"></pre>
                </div>
            </div>
            
            <!-- Analysis Section -->
            <div class="section">
                <h2>📊 File Analysis</h2>
                <button onclick="analyzeFile()">Analyze Text</button>
                
                <div id="analysisResult" class="result-box">
                    <h3>Analysis Results:</h3>
                    <div class="stats" id="statsContainer"></div>
                </div>
            </div>
            
            <!-- Query Section -->
            <div class="section">
                <h2>💬 Agent se Baat Karo</h2>
                <div class="chat-container" id="chatContainer"></div>
                <input type="text" id="queryInput" placeholder="Apna sawal yahan likho..." onkeypress="if(event.key==='Enter') sendQuery()">
                <button onclick="sendQuery()">Send Query</button>
            </div>
        </div>
    </div>
    
    <script>
        let currentFileContent = '';
        
        function handleFileSelect(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    currentFileContent = e.target.result;
                    
                    // Send to backend
                    fetch('/', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            action: 'upload_file',
                            content: currentFileContent,
                            filename: file.name
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            document.getElementById('fileContent').textContent = currentFileContent;
                            document.getElementById('uploadResult').classList.add('show');
                        }
                    });
                };
                reader.readAsText(file);
            }
        }
        
        function analyzeFile() {
            if (!currentFileContent) {
                alert('Pehle file upload karo!');
                return;
            }
            
            fetch('/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    action: 'query',
                    query: 'analyze',
                    file_content: currentFileContent
                })
            })
            .then(response => response.json())
            .then(data => {
                const statsContainer = document.getElementById('statsContainer');
                statsContainer.innerHTML = `
                    <div class="stat-card">
                        <div class="number">${data.total_words}</div>
                        <div class="label">Total Words</div>
                    </div>
                    <div class="stat-card">
                        <div class="number">${data.total_lines}</div>
                        <div class="label">Total Lines</div>
                    </div>
                    <div class="stat-card">
                        <div class="number">${data.total_characters}</div>
                        <div class="label">Characters</div>
                    </div>
                    <div class="stat-card">
                        <div class="number">${data.unique_words}</div>
                        <div class="label">Unique Words</div>
                    </div>
                `;
                document.getElementById('analysisResult').classList.add('show');
            });
        }
        
        function sendQuery() {
            const query = document.getElementById('queryInput').value;
            if (!query) return;
            
            // Add user message
            addMessage(query, 'user');
            document.getElementById('queryInput').value = '';
            
            // Send to backend
            fetch('/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    action: 'query',
                    query: query,
                    file_content: currentFileContent
                })
            })
            .then(response => response.json())
            .then(data => {
                addMessage(JSON.stringify(data, null, 2), 'agent');
            });
        }
        
        function addMessage(text, type) {
            const chatContainer = document.getElementById('chatContainer');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${type}`;
            messageDiv.textContent = text;
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    </script>
</body>
</html>
        """

# Server start karna
def start_server(port=8000):
    handler = AgentRequestHandler
    
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"🚀 Agent Server chal raha hai!")
        print(f"🌐 Browser mein kholo: http://localhost:{port}")
        print(f"⏹️  Band karne ke liye Ctrl+C dabao")
        httpd.serve_forever()

if __name__ == "__main__":
    start_server()
