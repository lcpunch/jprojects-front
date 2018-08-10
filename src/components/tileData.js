// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const scopeItems = (
  <div>
    <h4>Scope</h4>
    <ListItem button>
      <ListItemText primary="Create" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Modify" />
    </ListItem>
  </div>
);

export const moduleItems = (
  <div>
    <h4>Module</h4>
    <ListItem button>
      <ListItemText primary="Create" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Modify" />
    </ListItem>
  </div>
);
