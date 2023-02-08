import os
from pydantic import BaseModel


class Resort(BaseModel):
  id: int
  name: str
  location: str
  ski_runs: int


class ResortIn(BaseModel):
  id: int
  name: str
  location: str
  ski_runs: int


class ResortOut(BaseModel):
  id: int
  name: str
  location: str
  ski_runs: int


class ResortsList(BaseModel):
  resorts: list[ResortOut]


class ResortQueries:
  def create(self, resort: ResortIn) -> ResortOut:
    
