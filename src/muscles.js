const muscles = [
    { title: 'Chest',
      id: 'chest',
      exercises: [
        { id: 'a1', title: '', image: 'chest/1_1.jpg'},
        { id: 'b1', title: '', image: 'chest/1_2.jpg'},
        { id: 'c1', title: '', image: 'chest/12_1.jpg'},
        { id: 'd1', title: '', image: 'chest/12_2.jpg'},
        { id: 'e1', title: '', image: 'chest/35_1.jpg'},
        { id: 'f1', title: '', image: 'chest/35_2.jpg'},
        { id: 'g1', title: '', image: 'chest/36_1.jpg'},
        { id: 'h1', title: '', image: 'chest/36_2.jpg'},
        { id: 'i1', title: '', image: 'chest/37_1.jpg'},
        { id: 'j1', title: '', image: 'chest/37_2.jpg'},
        { id: 'k1', title: '', image: 'chest/132_1.jpg'},
        { id: 'l1', title: '', image: 'chest/132_2.jpg'},
        { id: 'm1', title: '', image: 'chest/214_1.jpg'},
        { id: 'n1', title: '', image: 'chest/214_2.jpg'},
        { id: 'o1', title: '', image: 'chest/360_1.jpg'},
        { id: 'p1', title: '', image: 'chest/360_2.jpg'},
        { id: 'q1', title: '', image: 'chest/3311_1.jpg'},
        { id: 'r1', title: '', image: 'chest/3311_2.jpg'}
      ]
    },
    { title: 'Biceps', id: 'biceps',   exercises: [
        { id: 'a2', title: '', image: 'biceps/8_1.jpg'},
        { id: 'b2', title: '', image: 'biceps/8_2.jpg'},
        { id: 'c2', title: '', image: 'biceps/125_1.jpg'},
        { id: 'd2', title: '', image: 'biceps/125_2.jpg'},
        { id: 'e2', title: '', image: 'biceps/136_1.jpg'},
        { id: 'f2', title: '', image: 'biceps/136_2.jpg'},
        { id: 'g2', title: '', image: 'biceps/147_1.jpg'},
        { id: 'h2', title: '', image: 'biceps/147_2.jpg'},
        { id: 'i2', title: '', image: 'biceps/169_1.jpg'},
        { id: 'j2', title: '', image: 'biceps/169_2.jpg'},
        { id: 'k2', title: '', image: 'biceps/174_1.jpg'},
        { id: 'l2', title: '', image: 'biceps/174_2.jpg'},
        { id: 'm2', title: '', image: 'biceps/178_1.jpg'},
        { id: 'n2', title: '', image: 'biceps/178_2.jpg'},
        { id: 'o2', title: '', image: 'biceps/204_1.jpg'},
        { id: 'p2', title: '', image: 'biceps/204_2.jpg'},
        { id: 'q2', title: '', image: 'biceps/210_1.jpg'},
        { id: 'r2', title: '', image: 'biceps/210_2.jpg'}
       
      ]
    },
    { title: 'Triceps',   id: 'triceps',   exercises: [
        {id: 'a3', title: '', image: 'triceps/23_1.jpg'},
        {id: 'b3', title: '', image: 'triceps/23_2.jpg'},
        {id: 'c3', title: '', image: 'triceps/54_1.jpg'},
        {id: 'd3', title: '', image: 'triceps/54_2.jpg'},
        {id: 'e3', title: '', image: 'triceps/55_1.jpg'},
        {id: 'f3', title: '', image: 'triceps/55_2.jpg'},
        {id: 'g3', title: '', image: 'triceps/80_1.jpg'},
        {id: 'h3', title: '', image: 'triceps/80_2.jpg'},
        {id: 'i3', title: '', image: 'triceps/143_1.jpg'},
        {id: 'j3', title: '', image: 'triceps/143_2.jpg'},
        {id: 'k3', title: '', image: 'triceps/150_1.jpg'},
        {id: 'l3', title: '', image: 'triceps/150_2.jpg'},
        {id: 'm3', title: '', image: 'triceps/166_1.jpg'},
        {id: 'n3', title: '', image: 'triceps/166_2.jpg'},
        {id: 'o3', title: '', image: 'triceps/229_1.jpg'},
        {id: 'p3', title: '', image: 'triceps/229_2.jpg'},
        {id: 'q3', title: '', image: 'triceps/341_1.jpg'},
        {id: 'r3', title: '', image: 'triceps/341_2.jpg'},
      ]
    },
    { title: 'Shoulders',   id: 'shoulders',   exercises: [
      {id: 'a4', title: '', image: 'shoulders/71_1.jpg'},
      {id: 'b4', title: '', image: 'shoulders/71_2.jpg'},
      {id: 'c4', title: '', image: 'shoulders/75_1.jpg'},
      {id: 'd4', title: '', image: 'shoulders/75_2.jpg'},
      {id: 'e4', title: '', image: 'shoulders/76_1.jpg'},
      {id: 'f4', title: '', image: 'shoulders/76_2.jpg'},
      {id: 'g4', title: '', image: 'shoulders/78_1.jpg'},
      {id: 'h4', title: '', image: 'shoulders/78_2.jpg'},
      {id: 'i4', title: '', image: 'shoulders/96_1.jpg'},
      {id: 'j4', title: '', image: 'shoulders/96_2.jpg'},
      {id: 'k4', title: '', image: 'shoulders/97_1.jpg'},
      {id: 'l4', title: '', image: 'shoulders/97_2.jpg'},
      {id: 'm4', title: '', image: 'shoulders/173_1.jpg'},
      {id: 'n4', title: '', image: 'shoulders/173_2.jpg'},
      {id: 'o4', title: '', image: 'shoulders/230_1.jpg'},
      {id: 'p4', title: '', image: 'shoulders/230_2.jpg'},
      {id: 'q4', title: '', image: 'shoulders/230_1.jpg'},
      {id: 'r4', title: '', image: 'shoulders/230_2.jpg'},
      

    ]
  },
  { title: 'Abs',   id: 'abs',   exercises: [
    {id: 'a5', title: '', image: 'abs/90_1.jpg'},
    {id: 'b5', title: '', image: 'abs/90_2.jpg'},
    {id: 'c5', title: '', image: 'abs/91_1.jpg'},
    {id: 'd5', title: '', image: 'abs/91_2.jpg'},
    {id: 'e5', title: '', image: 'abs/94_1.jpg'},
    {id: 'f5', title: '', image: 'abs/94_2.jpg'},
    {id: 'g5', title: '', image: 'abs/102_1.jpg'},
    {id: 'h5', title: '', image: 'abs/102_2.jpg'},
    {id: 'i5', title: '', image: 'abs/105_1.jpg'},
    {id: 'j5', title: '', image: 'abs/105_2.jpg'},
    {id: 'k5', title: '', image: 'abs/107_1.jpg'},
    {id: 'l5', title: '', image: 'abs/107_2.jpg'},
    {id: 'm5', title: '', image: 'abs/119_1.jpg'},
    {id: 'n5', title: '', image: 'abs/119_2.jpg'},
    {id: 'o5', title: '', image: 'abs/193_1.jpg'},
    {id: 'p5', title: '', image: 'abs/193_2.jpg'},
    {id: 'q5', title: '', image: 'abs/194_1.jpg'},
    {id: 'r5', title: '', image: 'abs/194_2.jpg'},

  ]
},
{ title: 'Arms',   id: 'arms',   exercises: [
  {id: 'a6', title: '', image: 'arms/2_1.jpg'},
  {id: 'b6', title: '', image: 'arms/2_2.jpg'},
  {id: 'c6', title: '', image: 'arms/3_1.jpg'},
  {id: 'd6', title: '', image: 'arms/3_2.jpg'},
  {id: 'e6', title: '', image: 'arms/4_1.jpg'},
  {id: 'f6', title: '', image: 'arms/4_2.jpg'},
  {id: 'g6', title: '', image: 'arms/5_1.jpg'},
  {id: 'h6', title: '', image: 'arms/5_2.jpg'},
  {id: 'i6', title: '', image: 'arms/7_1.jpg'},
  {id: 'j6', title: '', image: 'arms/7_2.jpg'},
  {id: 'k6', title: '', image: 'arms/142_1.jpg'},
  {id: 'l6', title: '', image: 'arms/142_2.jpg'},
  {id: 'm6', title: '', image: 'arms/386_1.jpg'},
  {id: 'n6', title: '', image: 'arms/386_2.jpg'},
  {id: 'o6', title: '', image: 'arms/682_1.jpg'},
  {id: 'p6', title: '', image: 'arms/682_2.jpg'},
  {id: 'q6', title: '', image: 'arms/1681_1.jpg'},
  {id: 'r6', title: '', image: 'arms/1681_2.jpg'},
  
]
},
{ title: 'Legs',   id: 'legs',   exercises: [
  {id: 'a7', title: '', image: 'legs/32_1.jpg'},
  {id: 'b7', title: '', image: 'legs/32_2.jpg'},
  {id: 'c7', title: '', image: 'legs/41_1.jpg'},
  {id: 'd7', title: '', image: 'legs/41_2.jpg'},
  {id: 'e7', title: '', image: 'legs/48_1.jpg'},
  {id: 'f7', title: '', image: 'legs/48_2.jpg'},
  {id: 'g7', title: '', image: 'legs/52_1.jpg'},
  {id: 'h7', title: '', image: 'legs/52_2.jpg'},
  {id: 'i7', title: '', image: 'legs/57_1.jpg'},
  {id: 'j7', title: '', image: 'legs/57_2.jpg'},
  {id: 'k7', title: '', image: 'legs/59_1.jpg'},
  {id: 'l7', title: '', image: 'legs/59_2.jpg'},
  {id: 'm7', title: '', image: 'legs/62_1.jpg'},
  {id: 'n7', title: '', image: 'legs/62_2.jpg'},
  {id: 'o7', title: '', image: 'legs/69_1.jpg'},
  {id: 'p7', title: '', image: 'legs/69_2.jpg'},
  {id: 'q7', title: '', image: 'legs/152_1.jpg'},
  {id: 'r7', title: '', image: 'legs/152_2.jpg'},

]
}
  ]

export const workouts = [
  { name:''
  , exercises:[
    muscles[0][1],muscles[0][4]
  ]
  }
]

export const getOne = (muscle_id, exercise_id) => {
  const muscle = muscles.find(({id})=> id === muscle_id )
  if(!muscle){ 
    throw new Error(`muscle id ${muscle_id} not found`)
  }
  const exercise = muscle.exercises.find(({id})=>id === exercise_id )
  if(!exercise){
    throw new Error(`exercise id ${exercise_id} in muscle group ${muscle.title} not found`)
  }
  return exercise
}

export default muscles