from typing import Optional
from fastapi import FastAPI
from fastapi.params import Body
from pydantic import BaseModel
from random import randrange


app = FastAPI()

class Post(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: Optional[int] = None 

my_posts = [{ "title" : "Mastering in Python1",  "content": "Check out topics1", "id": 1 },
            { "title" : "Mastering in Python2",  "content": "Check out topics2", "id": 2 }
           ]

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/posts")
def get_Posts():
    return {"data" : my_posts}

@app.post("/createpost")
def create_posts(post:Post): 
    post_dict = post.dict()
    post_dict['id'] = randrange(0, 1000)
    my_posts.append(post_dict)
    return {"data" : post_dict }

# title str, content str