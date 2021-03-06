import { Node } from 'topology-core/models/node';
import { Rect } from 'topology-core/models/rect';
import { Point } from 'topology-core/models/point';
import { Direction } from 'topology-core/models/direction';

export function myShape(ctx, node) {
  ctx.beginPath();
  
  // Make my shape.
  ctx.moveTo(node.rect.x,node.rect.y)
  ctx.lineTo(node.rect.x + node.rect.width, node.rect.y)
  ctx.lineTo(node.rect.x + node.rect.width,node.rect.y+ node.rect.height)
  ctx.lineTo(node.rect.x, node.rect.y + node.rect.height)
  ctx.closePath()
  
  ctx.fill();
  ctx.stroke();
}


export function myIconRect(node) {
  node.iconRect = new Rect(-999, -999, 0, 0);
  node.fullIconRect = new Rect(-999, -999, 0, 0);
}

export function myTextRect(node) {
    node.textRect = new Rect(
      node.rect.x,
      node.rect.y,
      100,
      30
    );
    node.fullTextRect = new Rect(
      node.rect.x,
      node.rect.y,
      80,
      26
    );
}


export function myAnchors(node) {
  node.anchors.push(new Point(node.rect.x, node.rect.y + node.rect.height / 2, Direction.Left));
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up));
  node.anchors.push(new Point(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2, Direction.Right));
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, Direction.Bottom));

//   // demo，其他自定义锚点。这里只是示例。
//   for (let i = 10; i < 360; i += 10) {
//     if (i % 90 === 0) {
//       continue;
//     }

//     const direction = Math.floor(i / 90);
//     const pt = new Point(
//       node.rect.center.x + (Math.sin((i / 180) * Math.PI) * node.rect.width) / 2,
//       node.rect.center.y + (Math.cos((i / 180) * Math.PI) * node.rect.height) / 2,
//       direction
//     );
//     pt.hidden = true;
//     node.anchors.push(pt);
//   }
}