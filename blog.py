from datetime import datetime
import json


title = input('title: ')
date = datetime.today()
body = input('body: ')

with open('blog.json', 'r') as f:
    json_data = json.loads(f.read())


json_data['length'] += 1
json_data[str(json_data['length'])] = {
    'title' : title,
    'date' : str(date.month) + '/' + str(date.day) + '/' + str(date.year),
    'body' : body
}

with open('blog.json', 'w') as f:
    f.write(json.dumps(json_data, indent=5))
