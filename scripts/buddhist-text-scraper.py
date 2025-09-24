from bs4 import BeautifulSoup

# Path to your HTML file
input_file = "kamma.html"
output_file = "body_only.html"

# ✅ Read the file content into a string
with open(input_file, "r", encoding="utf-8") as f:
    html_content = f.read()

# ✅ Parse the HTML string, not the file object
soup = BeautifulSoup(html_content, "html.parser")

# Extract the <body> element
body = soup.body

# Save only the body content
with open(output_file, "w", encoding="utf-8") as f:
    f.write(body.prettify())

print(f"Extracted <body> content written to {output_file}")
