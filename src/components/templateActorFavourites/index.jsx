import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function ActorFavouritesPageTemplate({ actors, token, action }) {
  const [favActors, setFavActors] = useState(actors);
  const [inputValue, setInputValue] = useState("");

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }

    setFavActors((favActors) => {
      const oldIndex = favActors.findIndex((actor) => actor.id === active.id);
      const newIndex = favActors.findIndex((actor) => actor.id === over.id);
      return arrayMove(favActors, oldIndex, newIndex);
    });
  };

  return (
    <>
      <Grid container sx={styles.root}>
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext
            items={favActors}
            strategy={verticalListSortingStrategy}
          >
            <Grid item container spacing={5}>
              <ActorList action={action} actors={favActors} token={token} />
            </Grid>
          </SortableContext>
        </DndContext>
      </Grid>
    </>
  );
}
export default ActorFavouritesPageTemplate;
