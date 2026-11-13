# usage: python3 cmppage.py ref.png mine.png outprefix [chunk=1100]
import sys
from PIL import Image
Image.MAX_IMAGE_PIXELS=None
ref=Image.open(sys.argv[1]).convert('RGB'); mine=Image.open(sys.argv[2]).convert('RGB')
if ref.width!=1440: ref=ref.resize((1440,round(ref.height*1440/ref.width)))
if mine.width!=1440: mine=mine.resize((1440,round(mine.height*1440/mine.width)))
print('ref',ref.size,'mine',mine.size)
ch=int(sys.argv[4]) if len(sys.argv)>4 else 1100
H=max(ref.height,mine.height); i=0
for y in range(0,H,ch):
    a=ref.crop((0,y,1440,y+ch)); b=mine.crop((0,y,1440,y+ch))
    c=Image.new('RGB',(2890,ch),(255,0,0)); c.paste(a,(0,0)); c.paste(b,(1450,0))
    c.resize((1445,ch//2)).save(f"{sys.argv[3]}-{i:02d}.png"); i+=1
print('chunks',i)
