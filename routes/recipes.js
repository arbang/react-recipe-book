const express = require('express');
const router = express.Router();

const Recipe = require('../models/Recipe');

// @route   GET api/recipes
// @desc    Get all saved recipes
// @access  Private
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({
      date: -1
    });
    res.json(recipes);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/recipes
// @desc    Add new recipes
// @access  Private
router.post('/', async (req, res) => {
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    const {label, totalTime, image, url} = req.body;
    try {
      const newRecipe = new Recipe({
        label,
        totalTime,
        image,
        url
      });

      const recipe = await newRecipe.save();
      res.json(recipe);
    } catch (err) {
      console.err(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route   PATCH api/recipes/:id
//@desc    Update recipe
//@access  Private
router.patch('/:id', async (req, res) => {
    const {label, totalTime, image, url} = req.body;

  //build recipe object
  const recipeFields = {};
  if (label) recipeFields.label = label;
  if (totalTime) recipeFields.totalTime = totalTime;
  if (image) recipeFields.image = image;
  if (url) recipeFields.url = url;

  try {
    let recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).send('recipe not found');

    recipe = await recipe.findByIdAndUpdate(
      req.params.id,
      { $set: recipeFields },
      { new: true } //if recipe doesnt exist then create it
    );
    res.json(recipe);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/recipes/:id
// @desc    Update recipe
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    // const recipe = await Recipe.findById(req.params.id);
    // if (!recipe) return res.status(404).send('recipe not found');
    await Recipe.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Recipe Removed' });
  } catch (err) {
    console.err(err.message);
    res.status(404).send('Recipe is not found');
  }
});

module.exports = router;
