import React, { useState, useEffect } from "react";
import { X } from "react-feather";
import { useTransition } from "react-spring";
import { Container, Message, Button, Content, Life } from "./styles";

let id = 0;

export default function MessageHub({
  config = { tension: 125, friction: 20, precision: 0.1 },
  timeout = 3000,
  children
}) {
  const [refMap] = useState(() => new WeakMap());
  const [cancelMap] = useState(() => new WeakMap());

  const [items, setItems] = useState([]);
  const removeItem = key => {
    setItems(state => state.filter(i => i.key !== key));
  };

  const transition = useTransition(items, {
    key: item => item.key,
    from: { opacity: 0, height: 0, life: "100%" },
    enter: item => async (next, stop) => {
      cancelMap.set(item, () => {
        stop();
        removeItem(item.key);
      });
      await next({
        opacity: 1,
        height: refMap.get(item).offsetHeight,
        config
      });
      await next({
        life: "0%",
        config: { duration: timeout }
      });

      removeItem(item.key);
    },
    leave: item => async next => {
      await next({ opacity: 0, config });
      await next({ height: 0, config });
    }
  });

  useEffect(() => {
    children(msg => {
      setItems(state => [...state, { key: id++, msg }]);
    });
  }, []);

  return (
    <Container>
      {transition(({ life, ...style }, item) => (
        <Message style={style}>
          <Content ref={ref => ref && refMap.set(item, ref)}>
            <Life style={{ right: life }} />
            <p>{item.msg}</p>
            <Button
              onClick={e => {
                e.stopPropagation();
                if (cancelMap.has(item)) {
                  cancelMap.get(item)();
                }
              }}
            >
              <X size={18} />
            </Button>
          </Content>
        </Message>
      ))}
    </Container>
  );
}