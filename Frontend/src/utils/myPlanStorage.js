// ============================================================
// HAPPY MAPPY - MY PLAN STORAGE
// Frontend temporary storage
// Later this will be replaced with MongoDB API calls.
// ============================================================

const STORAGE_KEY = "happyMappySavedPlans";

/* ============================================================
   GET CURRENT USER
============================================================ */

const getCurrentUser = () => {
  const rawUser = localStorage.getItem(
    "happyMappyCurrentUser"
  );

  if (!rawUser) {
    return null;
  }

  try {
    return JSON.parse(rawUser);
  } catch {
    return null;
  }
};

/* ============================================================
   GET USER KEY
============================================================ */

const getUserKey = () => {
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    user.id ||
    user.email ||
    null
  );
};

/* ============================================================
   GET ALL SAVED DATA
============================================================ */

const getAllSavedPlans = () => {
  const rawData = localStorage.getItem(
    STORAGE_KEY
  );

  if (!rawData) {
    return {};
  }

  try {
    return JSON.parse(rawData);
  } catch {
    return {};
  }
};

/* ============================================================
   SAVE ALL DATA
============================================================ */

const saveAllPlans = (data) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
};

/* ============================================================
   GET CURRENT USER PLANS
============================================================ */

export const getMyPlans = () => {
  const userKey = getUserKey();

  if (!userKey) {
    return [];
  }

  const allPlans = getAllSavedPlans();

  return Array.isArray(
    allPlans[userKey]
  )
    ? allPlans[userKey]
    : [];
};

/* ============================================================
   CHECK WHETHER PLAN ALREADY EXISTS
============================================================ */

const getPlanUniqueKey = (plan) => {
  if (!plan) {
    return "";
  }

  return String(
    plan.id ||
      plan.planId ||
      plan.title ||
      `${plan.destination || ""}-${plan.days || ""}`
  )
    .trim()
    .toLowerCase();
};

/* ============================================================
   SAVE PLAN
============================================================ */

export const saveMyPlan = (plan) => {
  const userKey = getUserKey();

  if (!userKey || !plan) {
    return {
      success: false,
      reason: "LOGIN_REQUIRED",
    };
  }

  const allPlans = getAllSavedPlans();

  const currentPlans =
    Array.isArray(allPlans[userKey])
      ? allPlans[userKey]
      : [];

  const newPlanKey =
    getPlanUniqueKey(plan);

  const alreadyExists =
    currentPlans.some(
      (savedPlan) =>
        getPlanUniqueKey(savedPlan) ===
        newPlanKey
    );

  if (alreadyExists) {
    return {
      success: false,
      reason: "ALREADY_EXISTS",
      plans: currentPlans,
    };
  }

  const planToSave = {
    ...plan,

    savedAt:
      new Date().toISOString(),

    savedPlanKey:
      newPlanKey,
  };

  allPlans[userKey] = [
    ...currentPlans,
    planToSave,
  ];

  saveAllPlans(allPlans);

  window.dispatchEvent(
    new Event("happyMappyPlansChanged")
  );

  return {
    success: true,
    plans: allPlans[userKey],
  };
};

/* ============================================================
   REMOVE PLAN
============================================================ */

export const removeMyPlan = (plan) => {
  const userKey = getUserKey();

  if (!userKey || !plan) {
    return false;
  }

  const allPlans = getAllSavedPlans();

  const currentPlans =
    Array.isArray(allPlans[userKey])
      ? allPlans[userKey]
      : [];

  const planKey =
    getPlanUniqueKey(plan);

  allPlans[userKey] =
    currentPlans.filter(
      (savedPlan) =>
        getPlanUniqueKey(savedPlan) !==
        planKey
    );

  saveAllPlans(allPlans);

  window.dispatchEvent(
    new Event("happyMappyPlansChanged")
  );

  return true;
};

/* ============================================================
   CLEAR ALL USER PLANS
============================================================ */

export const clearMyPlans = () => {
  const userKey = getUserKey();

  if (!userKey) {
    return;
  }

  const allPlans = getAllSavedPlans();

  allPlans[userKey] = [];

  saveAllPlans(allPlans);

  window.dispatchEvent(
    new Event("happyMappyPlansChanged")
  );
};